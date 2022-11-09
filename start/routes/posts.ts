/* eslint-disable prettier/prettier */
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/posts', 'PostsController')
// eslint-disable-next-line prettier/prettier
.apiOnly()
.middleware({
  store: ['acl:admin'],
  update: ['acl:admin'],
  destroy: ['acl:admin'],
})
