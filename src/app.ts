// koa
import * as Koa from 'koa'
import { Context } from '@core/koa'
import Catch from './middlewares/catch'
import Middlewares from './middlewares/index'
import connectDB from './database/conectDB'

const App: Koa = new Koa();

App.use(Catch)
Middlewares(App)

App.use(async (ctx: Context, next: () => Promise<any>) => {
	const path = ctx.request.path
	console.log(`path: ${path}`)
	if(path === '/') {
		ctx.body = 'Welcome to koa-graphql server.'
	}
	
	await next()

	ctx.set('X-Powered-By', 'Keefe');
})

export const start = (port: number):void => {
	console.log('start app...')
	App.listen(port, (): void => {
		console.log(`Koa server has started, running with: http://127.0.0.1:${port}. `)
		connectDB() // db start after server running
	})
}
