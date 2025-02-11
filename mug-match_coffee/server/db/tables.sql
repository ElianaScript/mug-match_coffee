CREATE TABLE profile (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    username VARCHAR(50),
    password VARCHAR(50)
);

CREATE TABLE shops (
    user_id INT PRIMARY KEY,
    username VARCHAR(50),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    message VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES profile(user_id)
);

CREATE TABLE preference (
    user_id INT PRIMARY KEY,
    coffee_id VARCHAR(50),
    ingredients VARCHAR(255),
    temperature VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES profile(user_id)
);

CREATE TABLE coffee_id (
    coffee_id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    description TEXT,
    origin varchar(100),
    roast_level VARCHAR(50),
    caffeine_content VARCHAR(50)
);