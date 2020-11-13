import { Reveal } from '../lib/reveal'
import { UsersModule } from './users/users.module'

Reveal.addModules([new UsersModule()])
