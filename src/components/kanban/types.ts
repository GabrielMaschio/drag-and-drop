export interface Characters {
	id: number;
	name: string;
	status: string;
	species: string;
	image: string;
}

export interface CharacterListProps {
	title: string;
	droppableId: "available" | "main" | "reserves";
	characters: Characters[];
}
