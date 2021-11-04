import { cruise } from "dependency-cruiser";
import fs from "fs";
console.log('you have reached the fetch_dependencies file!');
const ARRAY_OF_FILES_AND_DIRS_TO_CRUISE = [ "src"] 
const cruiseOptions = {
  includeOnly: ["src", "assets"],
  exclude: {
    path: "node_modules"
  },
  reporterOptions: {
    dot: {
      theme: {
        graph: { rankdir: "TD" },
      },
    },
  },

};
try {
  const cruiseResult = cruise(
    ARRAY_OF_FILES_AND_DIRS_TO_CRUISE,
    cruiseOptions
  );
  console.dir(cruiseResult, { depth: 20 });
  const json = JSON.stringify(cruiseResult.output);
  fs.writeFile('results.json', json, 'utf8', ()=>console.log('hooray'));
} catch (error) {
  console.error(error);
}


// depcruise-fmt -T dot results.json | dot -T svg > module-graph.svg