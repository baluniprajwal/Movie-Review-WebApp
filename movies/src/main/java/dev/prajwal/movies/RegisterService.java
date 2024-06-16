package dev.prajwal.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
    @Autowired
    private RegisterRepository registerRepository;

    public boolean registerUser(String username, String email, String password) {
        if (registerRepository.findByEmail(email).isPresent()) {
            return false; // User already exists
        }

        User newUser = new User();
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPassword(password);

        registerRepository.save(newUser);

        return true; // Registration successful
    }
}
