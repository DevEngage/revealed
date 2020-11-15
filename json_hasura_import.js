const ads = require('./backups/ads.json')
const categories = require('./backups/categories.json')
const developers = require('./backups/developers.json')
const esrbs = require('./backups/esrbs.json')
const gameengines = require('./backups/gameengines.json')
const gametrivia = require('./backups/gametrivia.json')
const genres = require('./backups/genres.json')
const platforms = require('./backups/platforms.json')
const publishers = require('./backups/publishers.json')
const articles = require('./backups/articles.json')
const games = require('./backups/games.json')
const podcasts = require('./backups/podcasts.json')
const pushnotifications = require('./backups/pushnotifications.json')
const questions = require('./backups/questions.json')
const quizzes = require('./backups/quizzes.json')
const users = require('./backups/users.json')

let manyToMany = {}

let relationMap = {
  games_relatedIds: 'related_game',
  quizzes_relatedIds: 'related_quiz',
  podcasts_relatedIds: 'related_podcast',
  article_relatedIds: 'related_article',
  news_relatedIds: 'related_news',
}

function isValidDate(d) {
  if (d instanceof Date) return d instanceof Date
  return undefined
}

const handleDate = (list) => {
  return (list || []).map((item) => {
    if (item && item.createdAt && item.createdAt.$date) {
      item.createdAt = isValidDate(new Date(item.createdAt.$date))
    }
    if (item && item.updatedAt && item.updatedAt.$date) {
      item.updatedAt = isValidDate(new Date(item.updatedAt.$date))
    }
    if (item && item.publishedAt && item.publishedAt.$date) {
      item.publishedAt = isValidDate(new Date(item.publishedAt.$date))
    }
    return item
  })
}

const getChildren = (list, name) => {
  return (list || []).reduce((total, currentValue) => {
    if (currentValue && currentValue[name]) {
      let built = (currentValue[name] || []).map((c) => {
        if (c) c['questionId'] = currentValue.id
        return c
      })
      total = [...total, ...built]
    }
    return total
  }, [])
}

// const handleRelations = (list) => {
//   return (list || []).map((item) => {
//     if (item?.relatedIds) {
//       item.createdAt = new Date(item.createdAt.$date)
//     }
//     if (item?.updatedAt?.$date) {
//       item.createdAt = new Date(item.updatedAt.$date)
//     }
//     if (item?.publishedAt?.$date) {
//       item.createdAt = new Date(item.publishedAt.$date)
//     }
//   })
// }

module.exports = {
  // ad: handleDate(ads.ads),
  // category: handleDate(categories.categories),
  // developer: handleDate(developers.developers),
  // esrb: handleDate(esrbs.esrbs),
  // game_engine: handleDate(gameengines.gameEngines),
  // game_trivia: handleDate(gametrivia.game_trivia),
  // genre: handleDate(genres.genres),
  // platform: handleDate(platforms.platforms),
  // publisher: handleDate(publishers.publishers),
  // article: handleDate(articles.articles),
  // game: handleDate(games.games),
  // podcast: handleDate(podcasts.podcasts),
  // push_notification: handleDate(pushnotifications.push_notifications),
  // question: handleDate(questions.questions),
  // choice: getChildren(questions.questions, 'choices'),
  // quiz: handleDate(quizzes.quizzes),
  user_old: handleDate(users.users),
  // ...manyToMany,
}
