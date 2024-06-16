package dev.prajwal.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public boolean authenticateUser(String email, String password) {
        Optional<User> optionalUser = loginRepository.findByEmail(email);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Check if the provided password matches the user's password
            if (user.getPassword().equals(password)) {
                // Passwords match, authentication successful
                return true;
            }
        }
        // Either the user doesn't exist or the password is incorrect
        return false;
    }
}

