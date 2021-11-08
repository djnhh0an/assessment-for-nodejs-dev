CREATE TABLE user_table (
    id int NOT NULL,
    email VARCHAR(30) NOT NULL,
    name VARCHAR(25),
    PRIMARY KEY(id)
);

CREATE TABLE tree_table (
    id int NOT NULL,
    friendly_name VARCHAR(200) NOT NULL,
    scientific_name VARCHAR(200) NOT NULL,
    owner_id int NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE likes_table (
    tree_id int NOT NULL,
    user_id int NOT NULL
);

INSERT INTO user_table(id, email, name) values (1, 'adam@versett.com', 'Adam');
INSERT INTO user_table(id, email, name) values (2, 'jackey@versett.com', 'Jackey');
INSERT INTO user_table(id, email, name) values (3, 'jane@versett.com', 'Jane');
INSERT INTO user_table(id, email, name) values (4, 'mike@versett.com', 'Mike');

INSERT INTO tree_table(id, friendly_name, scientific_name, owner_id) values (1, 'Oak', 'Quercus', 1);
INSERT INTO tree_table(id, friendly_name, scientific_name, owner_id) values (2, 'English Yew', 'Taxus baccata', 1);
INSERT INTO tree_table(id, friendly_name, scientific_name, owner_id) values (3, 'Giant Redwood', 'Sequoiadendron giganteum', 2);

INSERT INTO likes_table(tree_id, user_id) values (1, 2);
INSERT INTO likes_table(tree_id, user_id) values (2, 2);
INSERT INTO likes_table(tree_id, user_id) values (1, 3);
INSERT INTO likes_table(tree_id, user_id) values (3, 3);
INSERT INTO likes_table(tree_id, user_id) values (1, 4);