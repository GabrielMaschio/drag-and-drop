import { twMerge } from "tailwind-merge";
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
				<p className="text-xs text-gray-400">
					<span
						className={twMerge(
							"text-xs",
							character.status === "Alive"
								? "text-green-400"
								: character.status === "Dead"
									? "text-red-400"
									: "text-gray-400",
						)}
					>
						{character.status}
					</span>{" "}
					- {character.species}
				</p>
			</div>
		</div>
	);
};
