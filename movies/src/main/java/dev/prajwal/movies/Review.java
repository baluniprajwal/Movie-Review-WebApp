package dev.prajwal.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    private ObjectId id;
    private String body;
    private String userId;
    private Date createdAt;

    public Review(String body,String userId,Date createdAt) {
        this.body = body;
        this.userId = userId;
        this.createdAt = createdAt;
    }
}
