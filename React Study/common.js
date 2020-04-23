class Common{
  create(id){
    let app = document.createElement('div');
    app.setAttribute('id',id);
    document.body.appendChild(app);
    return app;
  }
  query(id){
    return document.getElementById(id)
  }
}