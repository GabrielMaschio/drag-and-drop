import type { Characters } from "./types";

interface Props {
	character: Characters;
}

export const CharacterCard = ({ character }: Props) => {
	return (
		<div className="flex items-center gap-4 bg-black/25 text-white p-3 rounded-lg shadow-md">
			<img
				src={character.image}
				alt={character.name}
				className="w-12 h-12 rounded-full object-cover border border-gray-600"
			/>
			<div>
				<h3 className="font-semibold">{character.name}</h3>
				<p className="text-sm text-gray-400">{character.species}</p>
				<p className="text-xs text-green-400">{character.status}</p>
			</div>
		</div>
	);
};
