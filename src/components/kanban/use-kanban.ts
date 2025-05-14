import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import type { DropResult } from "@hello-pangea/dnd";

export const useCharactersKanban = () => {
	const [columns, setColumns] = useState({
		available: [],
		main: [],
		reserves: [],
	});

	const getCharacters = useCallback(async () => {
		const response = await axios.get(
			"https://rickandmortyapi.com/api/character?page=1",
		);

		setColumns((columns) => ({
			...columns,
			available: response.data.results,
		}));
	}, []);

	useEffect(() => {
		getCharacters();
	}, [getCharacters]);

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;

		if (!destination) return;

		if (
			source.droppableId === destination.droppableId &&
			source.index === destination.index
		)
			return;

		if (
			(destination.droppableId === "main" &&
				columns["main" as keyof typeof newColumns].length > 4) ||
			(destination.droppableId === "reserves" &&
				columns["reserves" as keyof typeof newColumns].length > 4)
		)
			return;

		const newColumns = { ...columns };

		if (source.droppableId === destination.droppableId) {
			const column = Array.from(
				newColumns[source.droppableId as keyof typeof newColumns],
			);
			const [movedItem] = column.splice(source.index, 1);
			column.splice(destination.index, 0, movedItem);

			newColumns[source.droppableId as keyof typeof newColumns] = column;
		} else {
			const sourceItems = Array.from(
				newColumns[source.droppableId as keyof typeof newColumns],
			);
			const destinationItems = Array.from(
				newColumns[destination.droppableId as keyof typeof newColumns],
			);

			const [movedItem] = sourceItems.splice(source.index, 1);
			destinationItems.splice(destination.index, 0, movedItem);

			newColumns[source.droppableId as keyof typeof newColumns] = sourceItems;
			newColumns[destination.droppableId as keyof typeof newColumns] =
				destinationItems;
		}

		setColumns(newColumns);
	};

	return { columns, onDragEnd };
};
