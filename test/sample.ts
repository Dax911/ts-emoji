// 🙉
const x: any = 'This should be ignored';

// The following block should have no TypeScript checks
// 🙈
const y: string = 123;

// 📝 Need to refactor the below function
function add(a: number, b: number): number {
  return a + b;
}

// 👀 Enable TypeScript check
// 🙊 Expected an error below
const z: number = 'This should throw an error';


