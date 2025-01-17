import { type MetaFunction } from '@remix-run/node'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
  } from '#app/components/ui/navigation-menu.tsx'

export const meta: MetaFunction = () => [{ title: 'DobuMartial Arts' }]
export default function Index() {
	return (
		<main className="relative min-h-screen sm:flex sm:items-center sm:justify-center">
			
			<div className="relative sm:pb-16 sm:pt-8">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
						<div className="absolute inset-0">
							<img className="h-full w-full object-cover" alt="" />
							<div className="absolute inset-0 bg-[color:rgba(30,23,38,0.5)] mix-blend-multiply" />
						</div>
						<div className="lg:pt-18 relative px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-20">
							<h1 className="text-center text-mega font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
								<a
									className="block uppercase text-white drop-shadow-md"
									href="https://www.epicweb.dev/stack"
								>
									<span>DoBu Martial Arts</span>
									<svg
										className="mx-auto mt-2"
										xmlns="https://ibb.co/f0XDKn9"
										width="120"
										height="120"
										fill="none"
										viewBox="0 0 65 65"
									>
										<path
											fill="currentColor"
											d="M39.445 25.555 37 17.163 65 0 47.821 28l-8.376-2.445Zm-13.89 0L28 17.163 0 0l17.179 28 8.376-2.445Zm13.89 13.89L37 47.837 65 65 47.821 37l-8.376 2.445Zm-13.89 0L28 47.837 0 65l17.179-28 8.376 2.445Z"
										></path>
									</svg>
								</a>
							</h1>
							<p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
								Check the{' '}
								<a
									className="underline"
									href="https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md"
								>
									Getting Started
								</a>{' '}
								guide file for how to get your project off the ground!
							</p>
						</div>
					</div>
				</div>

				<div className="mx-auto mt-8 max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
					<div className="flex flex-wrap justify-left gap-8 rounded-3xl bg-slate-100 py-4 dark:bg-slate-400">
						This is the home page with info
					</div>
				</div>
			</div>
		
		
		
		
		
		</main>



	)
}
