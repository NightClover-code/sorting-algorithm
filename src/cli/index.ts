#!/usr/bin/env node
import { program } from 'commander';
import { startCommand } from './commands/start';

program.addCommand(startCommand);
program.parse(process.argv);
