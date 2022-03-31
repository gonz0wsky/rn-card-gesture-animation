package com.rnstarter;

import android.os.Bundle;
import androidx.annotation.Nullable;
import androidx.core.view.WindowCompat;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "rnstarter";
  }

  @Override
  public void onCreate(@Nullable Bundle savedInstanceState) {

    // Enables transparent navigation bar.
    WindowCompat.setDecorFitsSystemWindows(getWindow(), false);

    super.onCreate(savedInstanceState);
  }
}
