-- users
-- badges
-- posts
-- tag_posts
-- tags
-- comments
-- post_history

-- Example of schema 
-- The schema does not include any indexes ( except PK's )

-- Users
--reputation calculated as (upvotes-downvotes)*10
CREATE TABLE users (
	account_id INTEGER AUTO_INCREMENT PRIMARY KEY,
	reputation INTEGER ,
	views INTEGER DEFAULT 0,
	down_votes INTEGER DEFAULT 0,
	up_votes INTEGER DEFAULT 0,
    display_name VARCHAR(255) NOT NULL UNIQUE,
	profile_image_url VARCHAR(255),
	website_url VARCHAR(255),
	about_me TEXT,
	creation_date TIMESTAMP NOT NULL,
	last_access_date TIMESTAMP NOT NULL,
    password VARCHAR (255) NOT NULL
);

-- Badges
CREATE TABLE badges (
	account_id INTEGER NOT NULL,
	name VARCHAR(64) NOT NULL,
	work_location VARCHAR(50) ,
    FOREIGN KEY (account_id) REFERENCES users(account_id),
    PRIMARY KEY (account_id,name)
);

-- Posts
CREATE TABLE posts (
	post_id INTEGER AUTO_INCREMENT PRIMARY KEY,
	owner_user_id INTEGER,
	last_editor_user_id INTEGER,
	last_edit_date TIMESTAMP,
	post_type_id SMALLINT NOT NULL,
	is_accepted_answer BOOLEAN NOT NULL,
    up_vote INTEGER DEFAULT 0 NOT NULL,
    down_vote INTEGER DEFAULT 0 NOT NULL,
	score INTEGER NOT NULL,
	parent_id INTEGER,
	views INTEGER,
	acc_ans_count INTEGER DEFAULT 0,
	comment_count INTEGER DEFAULT 0,
	post_title VARCHAR(512),
	content_license VARCHAR(64) NOT NULL,
	body_text TEXT,
	creation_date TIMESTAMP NOT NULL,
	closed_date TIMESTAMP,
    FOREIGN KEY (owner_user_id) REFERENCES users(account_id),
    FOREIGN KEY (last_editor_user_id) REFERENCES users(account_id)
);

-- PostHistory -- to count no of views and no of users
CREATE TABLE post_history (
	post_id INT NOT NULL,
    account_id INT NOT NULL,
    PRIMARY KEY (post_id,account_id),
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (account_id) REFERENCES users(account_id)
); 

-- Comments
CREATE TABLE comments (
	post_id INTEGER NOT NULL,
	account_id INTEGER,
    comment_text TEXT,
    PRIMARY KEY (post_id,account_id) ,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (account_id) REFERENCES users(account_id)
);

-- tag_posts
CREATE TABLE tag_posts (
	post_id INTEGER,
	tag_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(post_id),
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
);



-- Tags
CREATE TABLE tags (
	tag_id INTEGER AUTO_INCREMENT PRIMARY KEY,
	tag_name VARCHAR(255) NOT NULL,
	tag_count INTEGER DEFAULT 0
);



git clone https://github.com/SkobelevIgor/stackexchange-xml-converter
cd stackexchange-xml-converter/
go build

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/Badges.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/Comments.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views



./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/PostHistory.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/PostLinks.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/Posts.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/Tags.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/Users.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views

./stackexchange-xml-converter -result-format=csv -source-path=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CQA_Web/softwareengineering.stackexchange.com/Votes.xml -store-to-dir=/home/rohith/Desktop/Sem4\ Mat/DBMS/As2/CSV_Views



.import /home/rohith/Desktop/Sem4Mat/DBMS/As2/CSV_Views/Users.csv 