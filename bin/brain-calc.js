#!/usr/bin/env node

import runGame from '../src/game.js';
import { RULES, game } from '../src/games/calc.js';

runGame(RULES, game);
