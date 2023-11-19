
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `blog_post` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `body` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
--
-- Dumping data for table `blog_post`
--

INSERT INTO `blog_post` (`id`, `title`, `body`, `user_id`,`image`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 'new_days_1', 'khogn nhieu thu de noi', 1, 'aloooo', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 'new_days_2', 'khogn nhieu thu de noi', 1, 'aloooo', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(2, 'new_days_3', 'khogn nhieu thu de noi', 2, 'aloooo', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(3, 'new_days_4', 'khogn nhieu thu de noi', 3, 'aloooo', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(4, 'new_days_5', 'khogn nhieu thu de noi', 2, 'aloooo', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(5, 'new_days_6', 'khogn nhieu thu de noi', 1, 'aloooo', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0);
-- --------------------------------------------------------

-- Table structure for table `authen`

CREATE TABLE `authen` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `accessToken` varchar(500) NOT NULL,
  `refreshToken` varchar(500) NOT NULL,
  `value_service` varchar(100) NOT NULL,
  `create_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Dumping data for table `authen`
--

INSERT INTO `authen` (`id`, `user_id`, `accessToken`, `refreshToken`, `value_service`, `create_at`, `delete_flag`) VALUES
(0, 0, 'fiuiwfafiweifiweuf', 'fiuiwfafiweifiweuf', 'ET2031', '2023-04-02 00:25:12', 0),
(1, 1, 'gewafklewfiwfegdrf', 'gewafklewfiwfegdrf', 'ET3310', '2023-04-02 00:00:00', 0),
(2, 2, 'iuksvueffuedrudkdg', 'iuksvueffuedrudkdg', 'SSH1151', '2023-04-02 07:30:00', 0),
(3, 3, 'fhjksdfueuwfwifure', 'fhjksdfueuwfwifure', 'ET2100', '2023-04-03 04:00:00', 0);

CREATE TABLE `questions` (
    `id` int(11) NOT NULL,
    `username` varchar(255) NOT NULL,
    `email_address` varchar(255) NOT NULL,
    `phone_number` varchar(255) NOT NULL,
    `message` varchar(255) NOT NULL,
    `created_id` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
    `update_id` int(11) NOT NULL,
    `update_at` datetime NOT NULL,
    `delete_flag` int(11) NOT NULL,
    `old_id` int(11) NOT NULL
);

INSERT INTO `questions` (`id`, `username`, `email_address`, `phone_number`, `message`, `created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 'abcd23041998', 'tranquyen151203@gmail.com', '0814808280', 'ET203123', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(1, 'abcd23041999', 'tranquyen151203@gmail.com', '0814808280', 'abcd2304', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(2, 'abcd23041998', 'tranquyen151203@gmail.com', '0814808280', 'ET23', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(3, 'abcd23041999', 'tranquyen151203@gmail.com', '0814808280', 'ET203123', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0);


-- --------------------------------------------------------
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_id` int(11) NOT NULL,
  `update_at` datetime NOT NULL,
  `delete_flag` int(11) NOT NULL,
  `old_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`,`password`,`created_id`, `created_at`, `update_id`, `update_at`, `delete_flag`, `old_id`) VALUES
(0, 'abcd23041998', '$2b$10$MI5YwmD8V3aDhhdvid/qFOpKE4QXaiBFQYLiZUKK5Bsne4HWOdDJu',1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0 ),
(1, 'quyen..tx', '$2b$10$Wnqf/QqItnYTWqZvR66U9ebDiQhEbSC0nQ01eb/RpTM2JA4otUfey',1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(2, 'tranquyen151203', '$2b$10$Dq1oa33qmrJmho5WRgfQ0ujuW4NiuiwJ6mRb/PFSEys4NIwwmvVx6', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0),
(3, '123', '$2b$10$EMcRT2bkDOKakKkAby9VFehJKVk3uZZWEF756FJKH2LR7wMuQv4cq', 1, '2023-04-02 00:23:44', 1, '2023-04-02 00:23:54', 0, 0);
--
-- Indexes for table `blog_post`
--
ALTER TABLE `blog_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `authen`
--
ALTER TABLE `authen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for table `blog_post`
--
ALTER TABLE `blog_post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

--
-- AUTO_INCREMENT for table `authen`
--
ALTER TABLE `authen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
COMMIT;

