const posts = require('../data/posts')
const connection = require('../database/connection')
 

function index(req, res) {
    const sql = 'SELECT * FROM posts';
    connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: 'Database query failed' });
      res.json(results);
    });
}
 
function show(req, res) {
  const id = req.params.id
  const sql = 'SELECT * FROM posts WHERE id = ?';
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    if (results.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(results[0]);
  });
}

function destroy(req, res) {
	
  const { id } = req.params;
                      
  connection.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete post' });
    res.sendStatus(204)
  });
}

function store(req, res){
  newId = posts[posts.length - 1].id + 1
  const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
  }
  posts.push(newPost)
  res.json("New post added")
}

function update(req, res){
  const id = parseInt(req.params.id)
  const post = posts.find((post) => post.id === id)

  if(!post){

    res.status(404)

    return res.json({
      error: "Not Found",
      message: "Post no found"
    })
  }
  	
  post.title = req.body.title
  post.content = req.body.content
  post.image = req.body.image
  post.tags = req.body.tags

  console.log(posts)
  res.json(post);

}

module.exports = { index, show, destroy, store, update }
