package dev.prajwal.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String password = payload.get("password");

        boolean loginSuccess = loginService.authenticateUser(email, password);

        if (loginSuccess) {
            return ResponseEntity.ok().build(); // Return HTTP status code 200 (OK)
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Return HTTP status code 401 (UNAUTHORIZED)
        }
    }
}


