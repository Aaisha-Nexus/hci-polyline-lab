import {
  Arrow90degLeft,
  SlashLg,
  Pencil,
  Trash,
  Arrow90degRight,
  ArrowClockwise,
  ArrowsMove,
} from "react-bootstrap-icons";

export const DrawAction = {
  Undo: "undo",
  Redo: "redo",
  Refresh: "refresh",
  Begin: "begin",
  Delete: "delete",
  Move: "move",
  Scribble: "freedraw",
} as const;

export type DrawAction = (typeof DrawAction)[keyof typeof DrawAction];

export const DRAW_OPTIONS = [
  {
    id: DrawAction.Undo,
    label: "Undo Operation",
    icon: Arrow90degLeft,
  },
  {
    id: DrawAction.Redo,
    label: "Redo Operation",
    icon: Arrow90degRight,
  },
  {
    id: DrawAction.Move,
    label: "Move Operation",
    icon: ArrowsMove,
  },
  {
    id: DrawAction.Refresh,
    label: "Refresh Operation",
    icon: ArrowClockwise,
  },
  { id: DrawAction.Begin, label: "Draw PolyLine", icon: SlashLg },
  { id: DrawAction.Scribble, label: "Scribble", icon: Pencil },
  { id: DrawAction.Delete, label: "Delete", icon: Trash },
];
