import db from '../../lib/db';

export default async function handler(req, res) {
    try {
        const [rows] = await db.query('SELECT * FROM items');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}