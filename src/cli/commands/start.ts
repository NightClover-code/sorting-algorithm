import { Command } from 'commander';
import { sorterStart } from '../..';

export const startCommand = new Command()
  .command('start')
  .description('Sort data structures using bubble sort.')
  .action(() => {
    sorterStart.startSorting();
  });
