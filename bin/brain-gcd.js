#!/usr/bin/env node

import runGame from '../src/game.js';
import { RULES, game } from '../src/games/gcd.js';

runGame(RULES, game);
