package com.myfitnessproject.beSteel.repositry;

import com.myfitnessproject.beSteel.entity.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActivityRepositry extends JpaRepository<Activity,Long>
{

}
