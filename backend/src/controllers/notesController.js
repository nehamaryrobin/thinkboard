export function getAllNotes (req, res)  {
    res.send('you got 10 notes');
}
export function createNote (req, res)  {
    res.status(201).json({message: 'note created successfully'});
} 
export function updateNote (req, res)  {
    res.status(200).json({message: 'note updated successfully'});
}
export function deleteNote (req, res)  {
    res.status(200).json({message: 'note deleted successfully'});
}   