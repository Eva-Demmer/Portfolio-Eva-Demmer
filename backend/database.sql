CREATE TABLE `admin` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `hashed_password` VARCHAR(255) NOT NULL
);
INSERT INTO `admin` (`email`, `hashed_password`)
VALUES
  ('admin@example.com', 'not-hashed-yet');

CREATE TABLE `projects` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `publication_date` DATE NOT NULL,
  `technologies` VARCHAR(255) NOT NULL,
  `summary` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `video_desktop` VARCHAR(255) NOT NULL,
  `video_mobile` VARCHAR(255) NOT NULL,
  `screenshot_desktop` VARCHAR(255) NOT NULL,
  `screenshot_mobile` VARCHAR(255) NOT NULL
);
INSERT INTO `projects` (`name`, `publication_date`, `technologies`, `summary`, `description`, `video_desktop`, `video_mobile`, `screenshot_desktop`, `screenshot_mobile`)
VALUES
  ('Cruzzle', '2023-07-27', 'React, MaterialUI, Tailwind, Figma, Express, Prisma', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg'),
  ('Emmaüs Connect', '2023-06-30', 'React, MaterialUI, Tailwind, Figma, Express', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg'),
  ('Hidely Days', '2023-05-12', 'React, SCSS, Figma, WeatherAPI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg'),
  ('Burdiga Live', '2023-05-05', 'React, SCSS, Figma, SpotifyAPI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta lacinia ipsum, id dignissim tortor placerat eu. Nunc ullamcorper lectus massa, non maximus nisl volutpat sed. Nunc at magna nibh. Cras ut nunc metus. Nullam quis vehicula erat.', 'https://svgshare.com/i/vhs.svg', 'https://svgshare.com/i/vf5.svg', 'https://svgshare.com/i/vet.svg', 'https://svgshare.com/i/vf5.svg');

CREATE TABLE `images` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `project_id` INT NOT NULL,
  `image_desktop` VARCHAR(255) NOT NULL,
  `image_mobile` VARCHAR(255) NOT NULL,
  FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`)
);

CREATE TABLE `project_images` (
  `project_id` INT,
  `image_id` INT,
  FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`),
  FOREIGN KEY (`image_id`) REFERENCES `images`(`id`)
);

-- Inserting data into the images table for project 1
INSERT INTO `images` (`project_id`, `image_desktop`, `image_mobile`)
VALUES
  (1, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (1, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (1, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg');

-- Completing the project_images table for project 1
INSERT INTO `project_images` (`project_id`, `image_id`)
VALUES
  (1, LAST_INSERT_ID()),
  (1, LAST_INSERT_ID()),
  (1, LAST_INSERT_ID());

-- Inserting data into the images table for project 2
INSERT INTO `images` (`project_id`, `image_desktop`, `image_mobile`)
VALUES
  (2, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (2, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (2, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg');

-- Completing the project_images table for project 2
INSERT INTO `project_images` (`project_id`, `image_id`)
VALUES
  (2, LAST_INSERT_ID()),
  (2, LAST_INSERT_ID()),
  (2, LAST_INSERT_ID());

-- Inserting data into the images table for project 3
INSERT INTO `images` (`project_id`, `image_desktop`, `image_mobile`)
VALUES
  (3, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (3, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (3, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg');
  -- (3, '', 'test-mobile-p1');

-- Completing the project_images table for project 3
INSERT INTO `project_images` (`project_id`, `image_id`)
VALUES
  (3, LAST_INSERT_ID()),
  (3, LAST_INSERT_ID()),
  (3, LAST_INSERT_ID());
  -- (3, LAST_INSERT_ID());

-- Inserting data into the images table for project 4
INSERT INTO `images` (`project_id`, `image_desktop`, `image_mobile`)
VALUES
  (4, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (4, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg'),
  (4, 'https://svgshare.com/i/vit.svg', 'https://svgshare.com/i/vhe.svg');
  -- (4, '', 'test-desktop-p2-1'),
  -- (4, '', 'test-desktop-p2-2');

-- Completing the project_images table for project 4
INSERT INTO `project_images` (`project_id`, `image_id`)
VALUES
  (4, LAST_INSERT_ID()),
  (4, LAST_INSERT_ID()),
  (4, LAST_INSERT_ID());
  -- (4, LAST_INSERT_ID()),
  -- (4, LAST_INSERT_ID());