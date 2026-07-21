import { getChangelogs } from './cms/helpers/changelog';

async function run() {
  const entries = await getChangelogs();
  console.log(JSON.stringify(entries, null, 2));
}
run();
