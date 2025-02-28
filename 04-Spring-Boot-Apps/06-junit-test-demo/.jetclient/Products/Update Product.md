```toml
name = 'Update Product'
method = 'PUT'
url = 'http://localhost:8080/products/20'
sortWeight = 4000000
id = '9cfcddc7-07a0-4ddc-b0db-1acf4d9f1e28'

[body]
type = 'JSON'
raw = '''
{
  id: 2,
  title: "iPhone 15",
  category: "Smartphone",
  price: 54645
}'''
```
