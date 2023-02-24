import { Level1MenuBuilder, Level2MenuBuilder, Level3MenuBuilder } from './PackageBuilder';

let level1MenuBuilder = new Level1MenuBuilder()
let level2MenuBuilder = new Level2MenuBuilder()
let level3MenuBuilder = new Level3MenuBuilder()

console.log(level1MenuBuilder.build(100).getDetail());
console.log(level1MenuBuilder.build(150).getDetail());

console.log(level2MenuBuilder.build(90).getDetail());
console.log(level2MenuBuilder.build(120).getDetail());

console.log(level3MenuBuilder.build(60).getDetail());
console.log(level3MenuBuilder.build(80).getDetail());