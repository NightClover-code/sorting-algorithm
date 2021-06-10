#!/usr/bin/env node
import { program } from 'commander';
import { startCommand } from './start';

program.addCommand(startCommand);
program.parse(process.argv);
