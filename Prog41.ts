// whatever we write in file1.ts is accessible in file2.ts so for managing larger project 
// this coluld lead to severe inconsistency & error, as whatever we write in typeScript is being present in 
// Global space , so to avoid this problem what we use is 
// 1st. for internal module or local scope we use : namespace
// 2nd. for using it in other specific folder we use export(key word) prefix before object,
// and import it in the file using import * or {filename} from 'loc'

// export ex we have done in Prog38 & in Prog39
