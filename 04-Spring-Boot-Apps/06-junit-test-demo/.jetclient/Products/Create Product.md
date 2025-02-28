```toml
name = 'Create Product'
method = 'POST'
url = 'http://localhost:8080/products'
sortWeight = 2000000
id = '55d9a160-81cd-4b1e-b28d-45ab68baa425'

[body]
type = 'JSON'
raw = '''
{
  id: 3,
  title: "iPhone 15",
  category: "Smartphone",
  price: 54645
}'''
```
