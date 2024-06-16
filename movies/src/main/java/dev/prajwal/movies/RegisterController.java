package dev.prajwal.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody Map<String, String> payload) {
        boolean registrationSuccess = registerService.registerUser(payload.get("username"), payload.get("email"), payload.get("password"));

        if (registrationSuccess) {
            return ResponseEntity.status(HttpStatus.CREATED).build(); // Return HTTP status code 201 (CREATED)
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); // Return HTTP status code 400 (BAD_REQUEST)
        }
    }
}

