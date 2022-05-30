package com.springboot.awsimageupload.bucket;

public enum BucketName {

    PROFILE_IMAGE("springboot-image-upload-096");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
