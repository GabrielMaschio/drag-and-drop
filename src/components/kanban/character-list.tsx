import { Draggable, Droppable } from "@hello-pangea/dnd";
import { CharacterCard } from "./character-card";
import type { CharacterListProps } from "./types";

export const CharacterList = ({
	title,
	droppableId,
	characters,
}: CharacterListProps) => {
	return (
		<Droppable droppableId={droppableId} type="group">
			{(provided) => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className="bg-white/5 rounded-[8px] p-4 border border-white/10 min-h-[400px] max-h-[600px] overflow-y-auto custom-scrollbar"
				>
					<h2 className="text-lg font-semibold mb-4 text-center">{title}</h2>

					{characters.map((character, index) => (
						<Draggable
							draggableId={`${character.id}`}
							key={character.id}
							index={index}
						>
							{(provided) => (
								<div
									{...provided.draggableProps}
									{...provided.dragHandleProps}
									ref={provided.innerRef}
									className="mb-2 shadow"
								>
									<CharacterCard character={character} />
								</div>
							)}
						</Draggable>
					))}

					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};
