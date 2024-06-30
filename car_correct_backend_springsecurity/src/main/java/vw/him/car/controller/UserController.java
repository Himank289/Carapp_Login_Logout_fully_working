package vw.him.car.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vw.him.car.entity.User;
import vw.him.car.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable long id) {
        return new ResponseEntity<>(userService.getUserById(id).get(), HttpStatus.OK);
    }

//    @PostMapping("/userAdd")
//    public User addUser(@RequestBody User user) {
//        return userService.saveUser(user);
//    }

    @DeleteMapping("user/{id}")
    public String deleteEmployee(@RequestHeader("Authorization") String jwt, @PathVariable long id) {
        return userService.deleteUser(jwt, id);
    }


    @GetMapping("/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt) {
        User user = this.userService.getUserProfile(jwt);

        String message = "User profile retrieved successfully";

        HttpHeaders headers = new HttpHeaders();
        headers.add("Custom-Message", message);

        return ResponseEntity.ok().headers(headers).body(user);
    }

}

