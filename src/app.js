import express from "express"    
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"

import queriesRoutes from './routes/queries.routes'
import usersRoutes from './routes/users.routes'


const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(helmet());
app.use(cors({
    origin: '*'
}));

app.use("/queries", queriesRoutes);
app.use("/users", usersRoutes);

export default app;