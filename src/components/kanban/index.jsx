import { DragDropContext } from "@hello-pangea/dnd";
import { useCharactersKanban } from "./use-kanban";
import { CharacterList } from "./character-list";

export default function CharactersKanban() {
	const { columns, onDragEnd } = useCharactersKanban();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
				<CharacterList
					title="Disponíveis"
					droppableId="available"
					characters={columns.available}
				/>
				<CharacterList
					title="Time Principal"
					droppableId="main"
					characters={columns.main}
				/>
				<CharacterList
					title="Reservas"
					droppableId="reserves"
					characters={columns.reserves}
				/>
			</div>
		</DragDropContext>
	);
}
