import { getDirectories } from "./get-directories";
import { writeFileSync } from "fs";

const photosRootPath = "photos/PokemonData"
const LABELS = getDirectories(photosRootPath);
writeFileSync('./labels.json', JSON.stringify(LABELS, null, 2));