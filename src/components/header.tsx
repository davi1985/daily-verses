import { Flashlight } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { ThemeToggle } from './theme/theme-toggle'

export const Header = () => (
  <header className="border-b">
    <div className="flex h-16 px-6">
      <div className="flex items-center">
        <Flashlight className="h-5 w-5 text-blue-500 mr-1" />
        <span className="font-bold text-xl text-zinc-900 dark:text-white">
          Daily
        </span>
        <span className="font-thin text-xl">Verses</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />
        <AccountMenu />
      </div>
    </div>
  </header>
)
