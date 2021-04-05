#!/usr/bin/env node

import runGame from '../src/game.js';
import { RULES, game } from '../src/games/progression.js';

runGame(RULES, game);
