#!/bin/sh

for i in 'articles' 'ads' 'categories' 'comments' 'developers' 'esrbs' 'gameengines' 'games' 'gametrivia' 'genres' 'images' 'links' 'platforms' 'podcastEpisodes' 'podcasts' 'publishers' 'pushnotifications' 'questions' 'quizzes' 'saved' 'userAnswers' 'userQuizzes' 'useranswers' 'userquizzes' 'users'
do
  mongoexport --uri mongodb+srv://admin:<PASSWORD>@gamesrevealed.jfpjw.mongodb.net/<DATABASE> --collection $i --type JSON --out ./backups/$i.json
done