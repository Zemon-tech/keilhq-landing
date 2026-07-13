async function main() {
  const res = await fetch('http://localhost:3000/keystatic/singleton/homepage');
  console.log('Status code:', res.status);
}

main().catch(console.error);
