import { Team } from '../models/Team.js';
import { createCollectionRouter } from './createCollectionRouter.js';
export const teamsRouter = createCollectionRouter('teams', Team);
