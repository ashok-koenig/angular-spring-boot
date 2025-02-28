package com.example.demo.controller;

import com.example.demo.exception.ProductNotFoundException;
import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping
    public List<Product> listAllProducts(){
        return this.productService.getAllProducts();
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id){
        Product product = productService.getAProduct(id).orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        return ResponseEntity.ok(product);
//        try {
//            Product product = productService.getAProduct(id).orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
//            return ResponseEntity.ok(product);
//        }catch (ProductNotFoundException e){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
//        }
    }

//    @ExceptionHandler(ProductNotFoundException.class)
//    public ResponseEntity<String> handleProductNotFoundException(ProductNotFoundException exception){
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
//    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable int id, @RequestBody Product updatedProduct) {
        if(!productService.updateProduct(id, updatedProduct)){
            throw new ProductNotFoundException("Update Product failed with id: "+ id);
        }
        return ResponseEntity.ok("Product updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable int id){
        if(!productService.deleteProduct(id)){
            throw new ProductNotFoundException("Delete product failed with id: "+ id);
        }
        return ResponseEntity.ok("Product deleted successfully");
    }
}
