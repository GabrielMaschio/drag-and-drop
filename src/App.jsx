import Logo from "./assets/logo.png";
import CharactersKanban from "./components/kanban";

export default function App() {
	return (
		<main className="min-h-screen w-full bg-cyan-950 text-white px-4 py-6 flex flex-col items-center">
			<header className="flex flex-col items-center space-y-4">
				<img src={Logo} alt="Logo Rick and Morty" className="w-100 h-auto" />
				<h1 className="text-2xl md:text-3xl font-bold text-center">
					Monte sua Equipe Interdimensional!
				</h1>
			</header>

			<section className="w-full h-full max-w-6xl mt-10">
				<CharactersKanban />
			</section>
		</main>
	);
}
