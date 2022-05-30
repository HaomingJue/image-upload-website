package com.springboot.awsimageupload.datastore;

import com.springboot.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        //USER_PROFILES.add(new UserProfile(UUID.randomUUID(), "Pixabay", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("bcc058aa-b10e-4ea6-a506-cd79752f8bc3"), "Amirali Beigi", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("956fbd3d-a236-4e7a-8be7-90a5f6db6cfa"), "Harry Potter", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("0377cf6f-036b-42df-84c8-4f37af53910a"), "Terry Fox", null));

    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
